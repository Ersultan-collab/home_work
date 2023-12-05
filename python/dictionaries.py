# dog = {'name':'Aktaban','color':'white','breed':'German Shepherd','age':'10',}
# student_dictionary = {'first_name':'Ersultan','last_name':'Marat','gender':'man','skills':['Programming', 'Mathematics', 'Communication'],'age':'18','marital status':'not married','country':'Kazakhstan','city':'Almaty',}
# # print(len(student_dictionary))

# # print(student_dictionary['skills'])

# student_dictionary['skills'].append("program")

# print(student_dictionary)

# print(student_dictionary.keys()

# print(student_dictionary.values()

# print(student_dictionary.items())

# student_dictionary.pop('first_name')

# print(student_dictionary)

# del dog
# print(dog)
# print(student_dictionary)


# dct = {}
# for i in range(1,16):
#     dct[i]=i**2
# print(dct)

# d1 = {'a': 100, 'b': 200}
# d2 = {'x': 300, 'y': 200}
# d = d1.copy()
# d1.update(d2)
# print(d1)

# d = {'Red': 1, 'Green': 2, 'Blue': 3} 
# for color_key, value in d.items():
#      print(color_key, 'corresponds to ', d[color_key]) 

# my_dict = {'data1':100,'data2':100,'data3':247}
# print(sum(my_dict.values()))

# my_dict = {'data1':100,'data2':100,'data3':247}
# dct = 1
# for i in my_dict.values():
#         dct *= i
# print(dct)

# myDict = {'a':1,'b':2,'c':3,'d':4}
# print(myDict)
# del myDict['a']
# print(myDict)

# keys = ['red', 'green', 'blue']
# values = ['#FF0000','#008000', '#0000FF']
# dct = dict(zip(keys, values))
# print(dct)

# dct =  [{"V": "S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII": " S005 "}, {" V ":" S009 "}, {" VIII ":" S007 "}]
# dctt = dict(dct)
# print(dctt.values())

# num_set = set([0, 1, 3, 4, 5])
# num_set.discard(8)
# print(num_set)

# fruits = {'banana', 'orange', 'mango', 'lemon'}
# vegetables = ('tomato', 'potato', 'cabbage','onion', 'carrot')
# fruits.update(vegetables)
# print(fruits)

# setx = set(["green", "blue"])
# sety = set(["blue", "yellow"])
# setz = setx & sety
# print(setz)

# it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
# print(len(it_companies))

# it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
# it_companies.add("Twitter")
# print(it_companies)

# it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
# it_companies.update(['apple','samsung','lg'])
# print(it_companies)

# it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
# it_companies.remove('Facebook')
# it_companies.pop()
# print(it_companies)

# it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
# # it_companies.remove('sam')
# # it_companies.discard('sam')
# print(it_companies)

# A = {19, 22, 24, 20, 25, 26}
# B = {19, 22, 20, 25, 26, 24, 28, 27}
# c = A.union(B)
# print(c)

# A = {19, 22, 24, 20, 25, 26}
# B = {19, 22, 20, 25, 26, 24, 28, 27}
# c = A.intersection(B)
# print(c)

# A = {19, 22, 24, 20, 25, 26,80,56}
# B = {19, 22, 20, 25, 26, 24, 80}
# c = A.issuperset(B)
# print(c)

# A = {19, 22, 24, 20, 25, 26}
# B = {19, 22, 20, 25, 26, 24, 28, 27}
# c = A.isdisjoint(B)
# print(c)

# A = {19, 22, 24, 20, 25, 26}
# B = {19, 22, 20, 25, 26, 24, 28, 27}
# c = A.union(B)
# p = B.union(A)
# print(c)
# print(p)

# A = {19, 22, 24, 20, 25, 26}
# B = {19, 22, 20, 25, 26, 24, 28, 27}
# c = A.symmetric_difference(B)
# print(c)


# age = [22, 19, 24, 25, 26, 24, 25, 24]
# ages_set = set(age)


# print(f"Длина списка: {len(age)}")
# print(f"Длина набора: {len(ages_set)}")


# # Ваше предложение
# your_sentence = "Я учитель, и мне нравится вдохновлять и учить людей."

# # Разделение предложения на слова
# words = your_sentence.split()

# # Создание набора (set) для получения уникальных слов
# unique_words = set(words)

# # Вывод результатов
# print(f"Всего слов: {len(words)}")
# print(f"Уникальных слов: {len(unique_words)}")
# print("Уникальные слова:", unique_words)

# str1 = 'pythonist'
# my_dict = {i: str1.count(i) for i in str1}
# print(my_dict)

# import random

# print(random.randint(1,11))


# student_info = {
#     "имя": "Иван",  
#     "возраст": 20,  
#     "средний_балл": 4.5 
# }

# student_info["возраст"] = 25
# student_info["новый_предмет"] = "Математика" 
# student_info["оценка_по_новому_предмету"] = 4.8
# print(student_info)


# print('email' in student_info)
# student_info.pop('имя')
# student_info.pop('оценка_по_новому_предмету')
# print(student_info)

# for i,j in student_info.items():
#     print(i,j)


# # Создание двух словарей
# dict1 = {"имя": "Иван", "возраст": 20, "средний_балл": 4.5}
# dict2 = {"имя": "Иван", "возраст": 20, "средний_балл": 4.5}

# # Проверка на равенство
# if dict1 == dict2:
#     print("Словари содержат одинаковые данные.")
# else:
#     print("Словари содержат разные данные.")


# # Создание словарей для двух студентов
# student1 = {
#     "имя": "Иван",
#     "возраст": 20,
#     "средний_балл": 4.5,
#     "name" : 45
# }

# student2 = {
#     "имя": "Мария",
#     "возраст": 22,
#     "средний_балл": 4.8
# }

# # Объединение словарей
# merged_students = {**student1, **student2}

# # Вывод объединенного словаря
# print("Объединенный словарь:")
# for key, value in merged_students.items():
#     print(f"{key}: {value}")

# # Создание словарей для двух студентов
# student1 = {
#     "имя": "Иван",
#     "возраст": 20,
#     "средний_балл": 4.5
# }

# student2 = {
#     "имя": "Мария",
#     "возраст": 22,
#     "средний_балл": 4.8
# }

# # Список студентов
# students = [student1, student2]

# # Заданный порог для балла
# threshold_score = 4.7

# # Подсчет студентов с баллом выше заданного значения
# students_above_threshold = [student for student in students if student["средний_балл"] > threshold_score]

# # Вывод результата
# print(f"Количество студентов с баллом выше {threshold_score}: {len(students_above_threshold)}")


# lis = [1,2,3,4,5]

# print(sum(lis))

# lis = [1, 2, 2, 3, 4, 4, 5]
# iu = set(lis)
# ui = list(iu)
# print(ui)

# lis = [1, 2, 3, 4]
# lis_2 = [5, 6, 7, 8, 9]
# lis_3 = lis + lis_2

# maxim = max(lis_3)
# minum = min(lis_3)
# print(maxim)
# print(minum)

# lis = [1, 2, 2, 3, 4, 4, 5]

# dct = {}

# for i in set(lis):
#     dct[i] = lis.count(i)

# print(dct)

# sets_1 = {1, 2, 3, 4}
# sets_2 = {3, 4, 5, 6}
# # print(sets_1.union(sets_2))
# print(sets_1.intersection(sets_2))

# lis = [1, 2, 2, 3, 4, 4, 5]
# tpl = tuple(lis)
# print(tpl)

# словарь = {'a': 1, 'b': 2, 'c': 3, 'a': 4, 'd': 5}

# уникальные_ключи = list(словарь.keys())

# print("Уникальные ключи:", уникальные_ключи)

# lis = [1, -2, 3, -4, 5, -6, 7]

# new_lis = []

# for i in lis:
#     if i >= 0:
#         new_lis.append(i)

# print("Список без отрицательных чисел:", new_lis)



# for i in range(11):
#     print(f'{i} * {i} = {i*i}')

