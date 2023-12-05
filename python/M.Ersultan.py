# Python сынағы – қараша

# 1-cұрақ:
# Төмендегі Python деректер құрылымдарының қайсысы өзгермелі болып табылады?

# B. List

# 2-сұрақ:
# Python тілінде массивтің соңына элемент қосу үшін қандай әдіс қолданылады?

# C. append()

# 3-сұрақ:
# Python тілінде dictionary үшін clear() әдісінің негізгі мақсаты қандай?

# B. Барлық кілт-мән жұптарын жойыңыз

# 4-сұрақ:
# True немесе False: Python-дағы set-те қайталанатын элементтер болуы мүмкін.

# B. Жалған

# 5-сұрақ:
# Python тіліндегі тізім үшін pop() әдісі не істейді?

# C. Белгілі бір элементті жояды

# 6-сұрақ:
# Төмендегілердің қайсысы Python тілінде бос сөздік жасаудың жарамды әдісі болып табылады?

# C. А және В

# 7-сұрақ:
# update() әдісі Python тіліндегі dictionary үшін не істейді?

# A. Жаңа кілт-мән жұбын қосады

# 8-сұрақ:
# True немесе False: Python тіліндегі массивті сөздікте мән(value) ретінде пайдалануға болады.

# A. Рас

# 9-сұрақ:
# Python-дағы set үшін intersection() әдісінің мақсаты қандай?

# B. Екі жиын арасындағы ортақ элементтерді қайтарады

# 10-сұрақ:
# Келесі код үзіндісінің нәтижесі қандай?
# my_list = [1, 2, 3, 4, 5]
# print(my_list[1:4])

# A. [2, 3, 4]

# 11-сұрақ:
# Python set пайдалану list пайдаланудан тиімдірек болатын сценарийді сипаттаңыз.

# ішіндегі элементтер қайталанбау керек болғанда
# ішіндегі реті маңызды болмаған жағдайда

# 12-сұрақ:
# Python массивтеріндегі  индексті түсіндіріңіз. Массивтегі элементтерді алу үшін индекс қалай қолданылатынын көрсету үшін мысал келтіріңіз.

# индекс ол 0 ден басталады

# Мысал:
# my_list =  ['hello', 'hy', 'ersultan']
# print(my_list[0])

# 13-сұрақ:
# Сізге бүтін сандар массиві беріледі. Тізімдегі барлық жұп сандардың қосындысын табатын және басып шығаратын Python бағдарламасын жазыңыз.

# # Мысал:
# my_list =  [1, 2, 3, 4, 5, 6]
# num = 0
# for i in my_list:
#     if i % 2 == 0:
#         num += i
# print(num)

# Шығару: 12

# 14-сұрақ:
# Сізде қоймадағы заттардың санын көрсететін екі dictionary бар. Бірінші сөздікті екінші сөздіктегі мәндермен жаңартып, жаңартылған сөздікті басып шығаратын Python бағдарламасын жазыңыз.

fruits = {'apple': 5, 'banana': 3}, {'banana': 2, 'orange': 4}
fruit = ['banana']

for fruit in fruit:
    if fruit in fruit:
       fruits [fruit] += 1
    else: 
       fruits [fruit] = 1
print(fruits)
# # Example:
# Output: {'apple': 5, 'banana': 5, 'orange': 4}

# 15-сұрақ:
# Жолдар тізімін ескере отырып, тек «l» әрпінен басталатын жолдарды сүзетін және басып шығаратын Python бағдарламасын жазыңыз.

# # Example:
# fruits =  ['lychee', 'apple', 'banana', 'lemon', 'orange', 'grape', 'lime']
# fruits_2 = []
# for i in fruits:
#     if "l" in str(i[0]):
#         fruits_2.append(i)
# print(fruits_2)

# # Output: [‘lychee’, 'lemon', 'lime']
