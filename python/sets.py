#1-t
it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
print(len(it_companies))

#2-t
it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
it_companies.add('Twitter')
print(it_companies)

#3-t
it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
it_companies.update(['Twitter','Instagram'])
print(it_companies)

#4-t
it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
it_companies.remove('Microsoft')
it_companies.pop()
print(it_companies)

5-t
it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
it_companies.discard('Google')
it_companies.remove('Facebook')
print(it_companies)

6-t
A = {19, 22, 24, 20, 25, 26}
B = {19, 22, 20, 25, 26, 24, 28, 27}
C = A.union(B)
print(C)

7-t
A = {19, 22, 24, 20, 25, 26}
B = {19, 22, 20, 25, 26, 24, 28, 27}
C = A.intersection(B)
print(C)

8-t
A = {19, 22, 24, 20, 25, 26}
B = {19, 22, 20, 25, 26, 24, 28, 27}
C = B.issubset(A)
print(C)

9-t
A = {19, 22, 24, 20, 25, 26}
B = {30,31}
C = B.isdisjoint(A)
print(C)

10-t
A = {19, 22, 24, 20, 25, 26}
B = {30,31}
C = A.union(B)
S = B.union(A)
print(C)
print(S)

11-t
A = {19, 22, 24, 20, 25, 26,}
B = {30,31}
C = A.symmetric_difference(B)
print(C)

12-t
A = {19, 22, 24, 20, 25, 26,}
B = {30,31}
del B
del A

13-t
age = [22, 19, 24, 25, 26, 24, 25, 24]
sets = set(age)

len_list = len(age)
len_set = len(sets)

print("Длина списка:", len_list)
print("Длина набора:", len_set)

#14-t
#String - Бұл 1 немес 2 кавычка мен жазылады және символдар мен жазылады
#List - Бұл өзгеретін ретті тізім бұл тізімнің ішінде кез келген деректер түрін жазуға болады ол [] осындай жақшамен жасалады
#Tuple - Бұл өзгермейтін ретті тізім ол () осындай жақшамен жасалады
#Set - Бұл тізімде элементтер қайталанбайды және элементтердің ретсіз жиынын

15-t
text = 'I am a teacher and I love to inspire and teach people.'
sets = set(text.split())
print(sets)



