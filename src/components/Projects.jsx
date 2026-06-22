import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  
  {
    title: 'Airbnb Clone',
    description: 'A full-stack Airbnb-inspired web application that allows users to explore property listing, view detailed pages, and  experience a modern responsive booking platform UI.',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEYQAAIBAwMBBgMGAwQHBwUAAAECAwAEEQUSITEGEyJBUWEUcZEjMoGhscEVQlIzYnLwFiSCkrLR4QclQ2NzovE0NURTwv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACURAAICAgMAAgMBAQEBAAAAAAABAhEDIQQSMRNBIjJRFGFCFf/aAAwDAQACEQMRAD8A5U1Ip5zuxUjwLv2oc1ggPoa4WztSsmivrqH+yuHAH8pOR+dMLbWbw4DIknyyDSvuH8lNFWM1xYzLNBlXHnWi19szixp/GIl4nhkjPrU0d9ZzdJ1z6NxSu+ubjUZRJOAXxjKoF/QVwlkXGGz9KEsiTMsbY9EaOMqQfka6+GBHvVcukuLZd1tFJI3onFattW1SP+0ilAHXcwYUVkQrhRZDaf1DHzFC3OnA9BUFtr0oA7y3U/4TimMerW0n9ojp8xn9KbTBUkVy705kOQDxQhllhO1+V/Srcz2twPs5kY+maW3mn5BIUY9aVxCmKo5VfoeakzzjNQTWbIx2nB+dcB3i4kGR6ik8HsOWpFFDRSq3RhUyNzWCTqtYV9qL0xYZJcXB2p6iu9USFJsW7bkzwaZLVgsWkVzXZrVIEwVnIrKyiYGvRN3ZeDBI6gjORSeS01GeFm+KnL7tyKTsA9jirBketZnjrRsDIbMTC2jFwAJAPFg5FT1zn1Na3jHUfWgY6JrA1RNKo/mH1rgzooyScevlWMFK+PM1p5MnrS5tTtV6zR/74qNtVib7mWz02oTR2bQezZPWoXcDz59KBe9nPMdrMfcpj9ahnsZ5zC0s9wFdNzRh9oBJ9vxoU2aw6SVR/MKGkvIEba0qZ9M0kn05/gIpYW2zG5dS7szcDOPP5V1c6bNHp1opuCjlnLNHGo3cjrkGj0BbHUUueUbPyo+3umXHhDDzFai05Tg7AOaGie5S6uEhuYmWPK7THuEbBm+8eD0wMDk1nFsNpDuC6iOA0R/CmFq9u2XMUhVeuUPFdaRZyXGWljtO7AXBIIY+pHPIxjGKJvontVKw2pkDE7hFLt8IGc49+BjyzQ+C0H5EEQz6ZIAAyfTFTTLbrGrQRpKSwGN+3rVNuL61j/8AxbhWJABXBBz6fLz9KGttZSaCWeCK97mGVQ5KgYO4Y4z50jwbD2L42m27jIPJ81ahJtDDfccH2NIbLUluAhivCN2MBgAeTgfnxTu1N2I+8ErMCMqUKkH0oLFI3cHfs/Mfuqv1oiDT7q0heMW8bq/my5IrldYvoD9rGD7g1zD2iRJJ2SEKzvlsc54FNGLX2BybFtzpUquW2EE+1D/C3Ef3HYewan7dpQf/AAAR6ED/AJ0FeaoLo5WNY/ZRTU/bBYrMk6HEqq49xUvwoktu/a3IT+oHIokdy8eSzGXPTHGK5UMU25Oz+nyp0v6KxPNZLktCSGqNZpYSBcJx/UKdCOMtgsufQmpjY+DexXYeM9aHUNoWxTBlDI2QfSttJknJI9eaW39ldkSlZO7YLkFF4HJoSOwuvjI4nvJeYgzFccnJ55zQpo12Ou8X1H41y00ajLMAPU8CuY9FjPDSzt85T+lEJolqh/sIz7kZrUawJ7+3TrKn1z+lRnUIzwiyP/hQn9qcpp8KfdjQfICpRbAdDj8K1Gsr7XVwT9lZTt+AH64rf/eUg8Nsi/45cfXANWDuR5it7UXqQo9zWo2xB8HqbYPeW8fr4Wf/APoVv+FXTnL6hKPaOJAP/cDTxprZBlpo1+bih5dX0qH+11C1U+8go0Cxb/BIzzLcXbnz+2ZR9FwK2ug2X81urH1bk/nREnafQUBzqUBx/Sc0O3bLQFXK3Ekg/wDLhZv0FHqZsLi0y3QeCFF9gtTraKBjaPpikjdvNJA+xtb+X5QY/Wov9O93/wBP2f1F/clRR6A7IsElqBGwCjp5iu5bQF4+PuxL+jVXYu1er3U8cSdnTFG0ihpJZ+ik9cYq5yD7Qevdr0/wvRUaMpJ+FTv7UJZW/h4N1IfzqLW4RHbWYH9/9RTfUlzZWf8A67UH2nTbbWRH9/8AatJGseQmE4G7GD/SR+opRHYrPr1w5lESoTgxPtDPk8HHtjy86o+lTTfDJJOzxTmYgIcp4cnHFWrUbKZ9UvDZtIqks8m2Tqc+QP8AN+VOKtl40ySHYCOZrdgiMWxsHGcE9QPP1qXUglzH3DiVlZiwCbd3Q+Lg/d4xjrk81RbTT7qa1WRtSuIpseGKWFuD/eIGM+/Su7eC+h7rvLl2WQnPdkb4zg9Rgccdepz5Vo9gtIOvrYbmcrjeUGVj6HOOMefrz4ffNTnSoYEa2jbEVwQZFDA5xyM4zWpNOuBogu7mVpZ1ddqOhwB7AcZzjP8ATjmgrbWnjjHei4EmOQkGQefn/nr0qXIjkX6opgnB+jaDThazQmNgJGlGDJgLuJ4/PHHHl060+uo45NNEQSJh3YCq5G3G0/Lyzj/5xWb74y2t7e7SVNrupzt8S+LbnGPX0+dQy6zrFzAj2vwixEEDvJMBwBndjHAIx+dNhU1C5i5ZRlL8Ti2ts6nM8aNJ3TMO7PhJz58E8/MD5CpjosszM4j+83vxQ2mXd/b30k88UKLOy94Umyx3dCAB146e1WdbxYAx2NtyOcjGah+Xbwp+FFLntXjuVjUlRkggGm1rpzPCHD4B8ya6uITJdhyPvEn5Zp0IYl0cCQgLkZycefrV4wJSkK/4dOqkrcDHzzWRRXqAqJMA+uOallt7YxkpIBnjiSiLu1VrhVbIVYl5HHNGnVi3sCFtc7sttI9cDipfhpQvimAHpnFSraotpMEd+SuDmtx2UQAJOfm1GmayW/tFWGXgcj/nVL7S6nd6Pqdt8JpyXW+3UFnm2BcE8Y869B1TB7xcdM/8NUHtejjUbQpn+yGSFzjrTSVCtujVnr2v3yr8LYaehYcZkdvLPkKhvtc7QWs9pFO1pGbiRY/DC3hJIHn161zYJ3BhkglODbjJ3FRnNKO3F5K8ziRsqkm5Tuzzxx7daWCti96LK/8AGGBD6u6k/wD64EGK4/h2qSAM+o6myk9QygH6CqZFrUJhmmltIzmIKARjp/Nn14plZdrry2sHjgURd4QwTdnaCOgHlXTHjykT/wBMF6ObjSoYgzahf3UeOW729K7foagS27OsMm+hcf3rsv8AuaSy3EV/dzTT200of+wEkjHZ6fOuw0X+rxx2kW8HxZOd/PTnpXWuCq/Ii+WvqhyLbsmrBibJiOpETsf+GiI5OzqcxqoHkVtH/daT28gN3MLY2hLqR3SDeI/euLl5oUS2urlI03b1R1IyemelP/hx/wBYP9kh1rdxpsWiXuyOVHltZO7+wC58JweTn8qW9je0QGmfwy7BWyYBd0UKFwSfU84oPU7W4j0q4lckosD7cqRnwnAFKOy0hBYY6OgHvzXNn48McuqZWGdzV0XvdBYd7PcwyzQRrnC4QnyFCLrOnusrSWsiMPuL32d3/to7W1/7rnxHycD8xVVeRUdlcYKjkFTUMGKE49pAyZJRdIsGlaxG8v2dpBlnVMSuSxGeqjFXZ+XB/wDLXH+69edaTmPXbKErlTtcH5gmvQ8/bHP9C/8AC9DNFR0ivHk5bYq1AZsLI+szUP2mTNrZ/wC1RF8c6dY/+saj7TD/AFCzI67mqDR0FX02zmupbVzIpR496loMB+OMnHh/fyrswTzPPdLNeGWfe82UZQCrFeAPl0pjDY62mP8Au+Mg5L7rriX/ABcc13Jaa+EbfaxOijwKJyxT3HHJ+dWqLRNNiaeLUUkRla6kEcYO2OXJc+e5c5ptosN1dKTLLPEN+SSTvXHIAz6+v4Ck+kLPo9/8UyCNzGY8vE2McdT59KYabeC2g2jUbOLDlu98SsM9eT6+nsKWMd7DJqtFsuneWxKRgoSqcqrZQ9MgHz559ATmkiWUoceE524BAO4HP3sf1cfTnpUZ1W2EZdtdtF6YVOcEeYyeCPXrzS9tUtCSW7Q7WIwG3Y5zn0/PrVm19kkmWTVZpxa2wbduWaNTuGd+XC5I9eenpz0pBBrVp/EpbFtLvEZiO6WNSvhC5yeM5PGa4utRt50TudelZhIpPdhskBgecChXv9PFyGNzdtcLFs3rC24KfXgHnn86lkUZu0wxTig6S1vXkZ1kkA37sFOMeWT6e/t7UTJqmriI7pIMghdpiPXAJ8/r6UtTU4J1EkVzfsNxOY7TgnofLHlj04FC3pspgIZl1Jy2AqiMJnHPt6fkKFxS0NUn6WfSLu8unLXbJzjAVNpzTXtJvPZeQRNtYlMEf4hXnVlpGl3kryx6ZdyyxSBWZmXIOAcZ+RFWPV+0C3Fg+lXmnzpHsRmKSKG+9hcfiMU2OcFJWCcZOLoR6dBdi6T4mRDGSucHPnn9qsn/AGhlxaJ3cgRlKA848jx61Xbm3m0m0e9+HfurZC+ZJQx45qPVu0j6hpSvL3Us6ybXVBt2jGR19jXVPJhc7h4QjjyKFT9G3ZAyf6P6vG8m5lxgknjw+9LgZe/z3pI70Hbu9T86faVDDD2cnuIrz7K4QkmRSy58vF1HWkItJI4Hule2uNkilTDuPUj2qKnBt2O4TSVHpd85EsgPqf8AgqpdqXmWeDuJ2iDxeLABzjNWW/yWkP8AfIP+5/zqt9pkM81psdQO725LgDPPHPnXO5Ky04y6gFvg6bDnafs1/M/9KrPaNO91UQFlVrqXuwR6nFWBEvLMQQ3cE6xCLLOYsr19cY6Z5qs6zL3mvK1uwlAnQoFOV4ZariWjnd9gHU9Hh0lUhnkaXvTg+LpigY3gsWQ2wOW5Y7+ntzTjtEs2ozRx95GqrkjDHz/elR0K/SAPNHE0TNw4cYP5V2uMl4jkkottWdz30pjYb2GfINUXxZWOOJHOFJB3c7smuBpdwx9s/dVs/tWo9OukbIhIxwACAPzpJfIT6wSD7TU3iLrlXBXZuHWuZ7+XfGe82gngZGT5/TrUI0+4hXd3GOT92RR5efNCm2v2m3iORkxyQoIB+flTdp/Zkk9BE99JPCFaQyA8Nls89P0OaK0Kcq0TQyRgvPH4GHLeIf8AOlSR3u5v9VlA6yeA8DzPy96baNHbyS2ywhVkSdO8BUsPvDz8qlOdO5KzpxY31aTov3a9p4NAnlhKkccqenNUQ6hIY5WvT9pt8Khcbqv3aS2WfR5lXbkMuc+fNU+O3sYswPb2zFFBJYE845HX8KXBOEY00HLjnJ6Y30iZ27UaTAuCuzxk+gBr0J5AjF8M3hHCjJ+41Ujs4sU2u2EgWPekTEMu7IGPc1aNbE5Ru7kQKcBkYZ3eHp9M1zcmVKzqwKosWT6xbtZRQZzLCWcgkeL5Gu9X1KO4treNk2qviBznr/k1Vfskml3W3eMpZiwJ8PoAf96gba6MBJjZpGk5Ynd5H1rzo5ZsLm0enzaxBFfm2L75k8JUtjqARz8qil15iCI4ePVjgVUe3yNb6sZoyFLoGVh6jj9hSCHtFdSKYZGDyRqCHPUg+Vemmgu0XqfXpIQVCQLj1y36mlUmt6dfTJHeWtu7MQu4RDGc1S7zV3LYklVSeMDkmn/Y3s82oTpf3cgKxnesByG9ifQUJ1QY3ZZpNLt4+RbW49xGtKL8R2uqac5j3RK7lhFGWPKkDgVYdfMsOmTvG5jk7s7XUAlTjrzVXuOz2omZWk1MyAfzsGJJ+QYCo9V9lLa8Hg1eJ8iDT7xzjp3WP1pMk+dVvJ7lfh9wjCJI4Bxg/vmox2ZCahDDLezBnRnJiRFORjHJBPnUj9nrW4vblLpp7gwlVjmeUh1HPGRjI69RQUYRM5SZmi6wbbTbeHuYSVXlml6859CfOh9Z1aP+IWc17JbxxRq+0RuX5b8MDpijjodjaQAG1RsFVUuC/mPWiY9IsYtSumS3t4dqoOFC8EUagt0btJ6EWm6yLczLbXOFklLYW3L5zj0NOFGnzzTS3rXUkrBAXDhRhW3LgY45phb6pcWx7uHuRGvAXul6VBLPYOwL6YuWyWMczL9Oa4cmdN/ho68eGl+WwLtVrmm2mjyFrea73Ov2bzFQTn1XFJ9Cu0n02V5dJilVCHVndmVcnnjPT3ppd6Po2pkKZL6EZyVfbKv7GmWkpYWKyRWkybkU5eWM4x58eZrow54qFSeyOXDJyuPhlhq/eRCOK2hibcSqqgKHjrkjrUz6vI0eIphGvmqgAVVLQtp80cDuChkZogGbDLzgZ65xgc00i0jULyeSS3aEROx2sT7+lS5ceyU4Mpxm03GQRLeyQXcNxG3eLtyyEbgSD5g/Or/aXfe2iTwpFGCoIZEC/mKpKdmLk4Zrtg2OSIxgfU04tWl0/SILJJ43eEYLucZ+lSwZOn7Mrmx9vDfa7vTpbS7sjOH/AB6H/PrST/s0sNLvOz6m7traSW3uHb7RfEh3bh+1MJ7pp43tbq8tVjlUr0OT9eKG7MabZdnGl7m4N0spBkWR16jzGAMf9K64cvGlVnLLiyHHaKWFIgbZBAQ4XciYyDxjiqbZpPp7yBQ3w+9j3rKwXGefwr0uK80yYFGiQseAjDO7z86U3j6ImQPioYkbG1Hbujn1HNdUeQtfmcz463+Aht4mvIY5IprKTfkABQT18wPlUp0O49LB/wDFCM0Y95p1jNHGkhb7TKlfRjnGAfenaCMjOAM++P8AP/WvTw8rGlXazjy8BTd1RV/4LMvPwWnsfUIB+1cy2AiZfi7CyGfu7pFGfyqwajbNMiLBPJGzHbhCMN88j0Bqvy6FqUpBRIZTyDukOD8hijk5dfqiX/zl9SYu1uztl0K+dbOFcW7sGilBxwRnA98VX+yNhbzmSZxI7CVSQGPhI56Z/anmsWepW+jX5kso44XtJCxjfccjz8h+WaC7Ay24ZF+FABI3ybDyQD5/LiuaWdzl2aoquN8cOt3YXZS3lnprRXiXEv2hYyMuB6geVbuBZGN2k76PeQAdrDj55qy6jPYKwEobYfFlWIz7A1Xr62glQv3xVf5Iy+fpmpYsjgqobLiU3dhnZCztP4yz28jOY4SQWPJyMVZryWJJ2DlC6kEBv8BGRSDsXD3d3cOAQ3dYOPnR+tNm5fhSQB+n/WpcmXfdHRx8fxwq7PP9VLST3KA3BRnUqM9CD1H+fOq9qEeom8k2WsgXIwM9OOlX14B3hYRtwc8VXL7s3Dc3Uk2+5QuckD/rUcLjBjuFls7cWQ/hqTYjRo22jg7Tn35qj2GkQyRy3N7fOcnxQ2y4OPLLH9q9T7Q2rXek3EK5IKEqOuCOa840l40l7uUsu7g4xn5c1WDDNE1mLQApo+nYlYYLgbj+JNOdD+L0y+S4vJV29HAOSQf8+VdzuLWNY44WgVugj5U/jjk1zFp15dyJM5W1jjPg7wElv9kVSrJ+Fp7RTRSaPcyhsp3XhGck0MdUVHIjtZG922gfrn8qSy3ttAPhiS/kyuuFP60mXtfexyvFNMiFGKkqgpPjH7loN5KNVtbhrRcDeAEYsTke4Aoczzre3jtMLdX2cNg+vqDSX/Sucnm7P4KOKwa9HcTd3LcBo3I3DaFI56g+RoODoHfYwv55JIubm4nKkEbIzg4IPlgH6VGbn4i+lm+EluWZVJ3EKwwP6Rz+VW4aPH3aCaW7kXGeZcAj8MUVZ6fbQSB4oEDdNwHi+tSd0WS2VORAM+R8wfL2qGTcMDyx1ppqGn3UE0zyQv3RJIYc/pS1uSuOmM4z5V4+SLU3o9GLTR1bJ55pTfmb4mNbeIsxfBC9cYNPLYDHGDSm4k7u/jdYnk2sfCmM9Pcikj6MH6dplh3Ec+pbmlU5RA+NtNBrUNnAIbSLCKOARk/U1XGe8lYlYooF/vvub6Dj86jneCEFr27G0erBQfw60U5vRn1W2NbrXppU8XTyyaXyXdzPyMgfPaKUz6/axnZYWjysf5iAoz8zzQzf6QakuYEECnOCRtB/E9TXRDi5Ju3ojLkQiH3jy7o/tiJA2QqLnP8Az/KjIEu3HAZh7xEH65/am+jLaJZxxWwQSoPHuxuJ8+fOmJSTB2uoPlVv8sWqsT/Q/aEBM0EQaZ2iDHhRnB+WajhuZ7lMgTCE+Fd7AD6daZ3txqqMiWVxAUXO5JYtwNT2aTyRLJcujyn7xXgD2A8hTx4cHpMn8007Yt0yyluL1BbRPMyMCwHAUfqfxq8MJkHKMPmCKUQTvbOXhbY5GCQvUfWmttrsqsi3RDBztDbcY/PFdmPiY0tuiM+RO9IhneYFHjVXIzlS2Pzx/nNDia4Vi3dToSc/ZyDaPkM0/wC9jmk2tCDx1OKjkt4W+7AD/hNO+LL/AMTAs6f7RKp2iLf6MaiJJJGItpMKwHGfkBS3sFIo0bxvkZ5FWnVdOhu9PuINjFJF2sA3WqpH2WaFMWN/e2gH8oII+hFCMZ49Tdi5Gp7iqHjNatKBHHGdi9RwM5qGbUYWfZJaKUXgYwaQT6FrqH7HVYZcfyyW+PzBNDtB2it/v29pOB/RMR+oqkZJEZRZdtDlheWZreMRKEAYAYBPNVntbrV1baw8VqyBAgLB1zk9PX2FWLsbbXkumGa6txDJKzZTcGwBwOfw/Oqd23VE1x1Rt2EAJA8wTmublS/h04IrxgX+kV2p8cNu3yDD96xu0xH3rIE/3Zf+lJ5CyqSVOPKore3mu3KRDBAySelc0W2Xcf8Ah7eybByePOvN+1/Z+aw1A3FojPBOxIXONjdSDXqRjBHmPmKEvrG3vLc29yiyI3ka606INWeb6Tf3tmgS8Nu0Y6AtkgfPyNMz2htQx3yDHl4lz+tLdb0x9LvpLcJHsB3I3dDxKen7/Sgo1mPAbHyAH6VKXMUXVBXGb2NZL/RpmMki3Mkx/nUAn8PDSLULTRbpi62uol+mTJs/UCizGcYmHeA+Tsa0tqoP3FA8gPKpPnKrQ6439E+n6DZXd2ITPeKTysbuvi9eR1q4aT2SsoirG0TYnJaQ7iR7ZpeYQyKFx3kbB42P8rDkfhUo7X3N1AYZl7qUDb05HtxXTg5Kyx/6RyYej0Wiy1g/x9LOBi0JVg6+QI9PlirG0yk7VVtxHRRmq12R0dreH+JXil7mQZhttwDMvmSD5Vd7O7SSFTKiwMvPdhh+eKZrYU6Qku7oC3aMJkyMYtu4ZzjnI9v3qulobKxgsngV441EUcpjJY+5xXet6zBLqEjwmcqoKRhI/LOSefX9qCTWIyFR4rrYniwbRiM++KC+J6YH8i2gaR57R3L7Co5wvGflmkt3rSB3a2t3Zh1LkALn5Zphqeopdh1jfy+50YenBpvbdlUjTvxjvjEnhdQQp/eoS42Fux1nyJOynIdZ1GTZAjhfSNMDn3zRtp2PllCjUZQhfoV8TZ8v8irrFZp8Qbe7s33KuVlWElHOOduMkfI4ppb6TMzu0shFtIA4QxkMgx0yefrzVYwjH9UK5OX7FVtdCtrABorQylW2v4QT8xlv1qwQaWwJdgEXqFIyXGOvGenuBTK4jhCxtbyvDk4Do3GM+dRSpJLKDjegyBLuGRx0zj8qawJUhINIsZ9KUxK0dwE3K4yNxJ888Gls+l3lrEJBdsqlgoLnHJ+RPAo+2t3gEIneZHk4TE20twcLtIyflQk9jI96biW6miVV2gd/9/Pn5EYpXhUtjLI6oXTR6xDcGEbJX6gblOR6jOM1Ov8AGjuWKNSU4ZQUO0+/PFCX9nE8scXwtxLKchbgF2UZ6kNnihZIDDNHHdK5kLDu5Q/Bx0BycZ9D50PhX0wvI68GlmuuXdv3nEQJIxvQMMMV6Ak9Qab6Dokv8SeS5u1nltwrAKSyktu8/UY/Ok2l3kUNupltbARZk+2kUBh4j97j/wCKtejTCWaS8tRbmGREVe6GFIGeVI45z+VPHElsVzflDspHKykxlfIOEIdSP2qaNCjq77oy3AXqW+flQ0svfPDCqBjg43bTt+fO76ZqWJttorJl2zwBx4unRzVbJk7oVP2myIMeq5Yke/p+daURS4PgOc7AxDFvpUVq95JcEuWCrxiSFlz8ucGo9TZoELxSsrS5BXghh58/KswpbF9xsmlZo0VVOAoxihpIDyQuPkaIR19D+IqQbSeOtZJMz0B95LENqSyRjGAAcAV572mXu9YdN2cID74JJr0m6WvPO1bNHr0jrjIiTr8q486L4mImkmVgNkjLjJAXkiirUWcSthWdGAzkDJIzz19zTDStSuSEWeGZoVAVpJAXTbg4J/H09h5it6vLb29xC9/BHIZYt29SV5J6Z/aoW1qjqx54xdSVnpxkJ4Yk5rjxI3ByK4wX6da7UlVyTnyIY8Cu44hT2l0+S/shNBHvngz4c8sKpMcV2z7VtJy3oUIr0wzKB4SPkPKuDeAqUPSoT4sZuykcriqKFFpGqzBibXu1VSxaRtoAqXQ9KOq2vxMt2Io9xBWMBmH7VNq2oTaGZe/v0khOSIpj4iD6Hr9aUdl9Xu47aaysoYJWV9zSSybVXgfjWXFxoHzSZcrLs5pJgMsxnlOSF+0Hj/THyNMo7PRtLZZDZW0TSYAeUAnPuaqCtf3JJ/iWZOARaLtX8ST+dPtItNNjciRe8uhnM053v8wTxVoxivEI5N+j9lD3TF0K94mFnVFzGB7+dSwqZYWtoZS6YIaTOGb58UFqMkvwyw2958POSBE0u37U46EVmj6jDfWc8fejvl+zkaNsYIHOPTnNOL6LoezdmXkWdZonByqo5II+ZHPlSTV9Nt9PvrKKNZiLpiH3hdyYIHGPnTnXGskX/X1CQwJiCfviZnbjgfTzql3rape3CCxS5McR3QSXLeJTkZFR+DH9od5ZPwtMvZtERHeYsgZTtJAA885JwKd2wEzRtHcK1vjDIfGSfTI4+lVDS47W8kje6lllkTPfW9wxz/s4OMVb45WitYPgrJdhB8IwgX8KeEFBaEc2/RgokS2NxLCscpH3DJnn59KFsY7uS1CXZPI/tS4BDDy8PUUVxPaAlYzOIyVTduAbFCWtnJqNkU1XuCu7cgg/lx155oqzaoJNndLOkjXJkRCcpjGePP1xUct5HISto7SYUhzCqkp6E5/Si2MgtFFjsXYVGZlPCj260Pq6mezItkeU7gSsMxjbj3FF2CNCy2tGvEZ5b34i36LsjMZ3e586z+FRyRHfvYoeVlIfp8qY6bevdTMk0c8LonihkTKkdMhvX8a4uLWOdy7W0iHI2vG2G9s1o+bM7vRXV0mO67u7SzkjIJCE7omI91PUfOoLnSZO7blJY2OJAkRcgf3hn9Ktr2ssEJVGeUkdXbxDPp7/ADrmTZaLG5VefDJI/Dbfw60WZeFV0TSisUBlWQxgHgg5zuPOTTpbdYGEXw4gtQSwKAFWJ9cDg+9FzCW4dZrK/k2twAiB0GPXzqZUlEC/ExiSQN96IkDH9XNZhRuEjusxxsSAfCep/GorW8EsbSqsneE47lzlgR54JqSSZbqBvgZIZ2BxjvMefPI6Gpbi1Qwq/wAMZHUD7rYYe2fOiKTxu+zfKoEv8oGRn556GktxdteSmQbkA4CHqvr+dTXWsLMptFjnhuOMBlxx54I9qEULxg9BgUrY6RsMy/eyPnUiyCtKrfykNXWAOGUD8qCYWjieQetefdrv/vLsD/In6Vf5VUjgGvO+1rY1ecegX/hFQyjwFEF1JbT94jncTggn73GOfUYzXoawaZqdkjMZY5UIGY1+8MeQby968/lvLLvXLWZWN49oVJT4Xxwcn9ParH2X1Sa5tnBhCrAFiVhLtY8Z5PU+Wfw9KhNNR7IokrLqLgJ0GT6VFJM0hJK49VFQBjuPpUGoWzX9r3KSvEWOWZDjjPSvQOcju9btLJzE0hln8oovE30HSlVxqWoX2R3yafF/RGN8x+nAo2DQrS1XbEuW6sdx8R9/WjUsolZWRVjYdfMH50LNQgj0y3wWhtGMjdbi5bdIflnpQU2lyTSFriR0lj/sp+px6MPMVYr68AfuoxjHU4oZJu8JL8jzqTmGiDR7w7zbTwrFcIOVVsK49VNOQqOMKg+QNBW6RxuTtzu4BxyKZxQMEyDz60OwyRJa3UkCBJIu+jVvDkAuvPlnrR99JaRwtdwxlbmb7NZGUnbnzI9OlD20e1cPya1OhSZH53LzuU4plIDicJ2fisZY7q5lku5GBTxIWAJ6Ec+EDn61NcWvwMTPGy92x3N3h3YP4+VSi/RpES4dvTcp4/GjhsWICZkaPPDHGDTWmKlQnuNGhvoFebbFOniSWHwsp9Qam0tNYikVL2aKaBQcybcM3pjFFtfEC4LW42o22Pa4bePU/wBNcQ6tI6sUtlcxyKrqj7sKeM+XI60a+xW90FwDfcXMc/dsjqNsYQ5C45yfepO5isrMCzTuIoAWMMKKN3tUF0bzvdiZKeQUYFC31rqRktfhbhFAJMxLHHl5efpWsbrSthWl6wNSmdYrd0RByx6A+lEXUDKry2YBlzwu7g+tCX88UKRq0sUaN/U2Mn2omwRUi4YPu5znIrJmrWmDKbm+gubeZ0jONu+F/Ep96CsGfTbsJquoIzFNsSM55yepzTSy7pGnWKARSNJuk2keInz4pfr1jY6tC1vfB4u6O8TgDKfXPHtRdS2BWtBjTd/dFYL7a6/+GVx88etTXMIktg81tHPNH4kUAcsOmM9DQYjjmWOWC4DCHwgscFDjHWiIbkXIKQ3S74jtkCjz96Ldgqtmra0so5lvPhUhvJk3NgAOTjzx1PlmtXNz8Fb98sN1ODwyqMlB648x8qku5lR4sQiSQk7S37HHWu2lUTRiScqzJxH4cH8s/nWTsD0J7Sw07U3+JnWCS+HLNbloiR5bgCPzzT233hO7EQiVeAuc/Q0LKsqXBMVvG+R94DB/E1NeXPw1m8pwG4UDPmazY3UU6jN3t4zocrGNi8/U/X9KD3EeVbUED196wNjrzU7HR2sn+etSRPgkl9vzrhdnHvXePQj8awTb7HGcAn1FUHWYVvO015byNtXYpB/2RV4liDDkH8DivPdZuxYdprqWeOUxsoUbR7D/AJUlWwi+90d0Zgkitg8fymiND1aTSUa0vTBHAxMiyOniZuBjIIzxRB1C0vZMQyqCf5SdpP1qxw9gba/tYzqF3JG/3gsQAx8yQc0fjTVMHZrweKBUdyTG6BOM9aysqzERuI5BzXErkI2PSsrKRhENwSSxPXNbQ4jGKysqA4xsUDsC2Sf0phG53KvlWqysYNbhQRW4vH97mt1lOgMXXsax3DMvWprcCaM28wDxFSwUjocgcfWsrKWXjGXqDtNs4tOWQQZPeyEtuwaZpGiZ2Iq564GM1lZVcf6olk/Zm3kYQBuvzrhh3qbG6OMHHvWVlN9gXgm07R7aHTvhpGkuY3ZmHfsCU8vCQBimEUSabbpFbDCbujEnrWqysvQfRxZJE13cXYgjWdhsZ1BywHr9KDtNVnu9U+DmSIwncpG3qKysqWdtNV/S2BJxd/wcLZ2/ctB3SCJjgptGDXEUccCOsMaIueirjNZWVcgTZIfHUcUo16FFmgkXIdgQW+WP+dZWUV6B+DKBT8Eg7x8hc7s80k1K5lkmhhchkVWbnzOcfpWVlJMeAOSQ2AcAVMDWqykKEmAOgxis5HnW6ysY0zHaaXajFHLIglRWDJyCOtZWUjCILvs/pzsZViMboQw2HA6+lXy3lYxqeOg4rKymixWf/9k=',
    tech: [' Express.js', 'Node.js','Bootstrap', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://airbnb-xodf.onrender.com',
    featured: true,
  },
  {
    title: 'Shop Ease–Online Shopping Platform',
    description: 'An e-commerce web application that allows users to explore products, view details, and enjoy a seamless shopping experience through a clean and responsive design.',
    image: 'https://img.magnific.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740&q=80',
    tech: ['Html', 'CSS', 'React', 'javascript'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  
]

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('all')
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured) 
    : projects

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-mono text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A selection of projects that showcase my expertise in building modern, scalable applications
          </p>

          <div className="flex justify-center gap-4">
            {['all', 'featured'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === f
                    ? 'bg-orange-500 text-black'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {f === 'all' ? 'All Projects' : 'Featured'}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="gradient-border rounded-2xl overflow-hidden bg-gray-900/50 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-orange-500/20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/50 rounded-full text-white hover:bg-orange-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/50 rounded-full text-white hover:bg-orange-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
