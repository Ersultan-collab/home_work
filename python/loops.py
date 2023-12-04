# # ### Exercises: Level 1

# # 1. Iterate 0 to 10 using for loop, do the same using while loop.

for i in range(11):
    print(i)
num = 0
while num <= 10 :
    print(num)
    num += 1 

# # 2. Iterate 10 to 0 using for loop, do the same using while loop.

# # for i in range(10, -1, -1):
# #         print(i)

# # num = 10
# # while num >= 0 :
# #     print(num)
# #     num -= 1 

# # 3. Write a loop that makes seven calls to print(), so we get on the output the following triangle:
# name = 'Ersultan'
# for i in name:
#     for j in i:
#         print(j)

# # 4. Use nested loops to create the following:

# for i in range(8):
#     for j in range(8):
#         if (i + j) % 2 == 0:
#             print("#", end=" ")
#         else:
#             print(" ", end=" ")
#     print()

# 5. Print the following pattern:

# for i in range(0, 11):
#      result = i * i
#      print(f'{i} * {i} = {result}')

# 6. Iterate through the list, ['Python', 'Numpy','Pandas','Django', 'Flask'] using a for loop and print out the items.
# lis = ['Python', 'Numpy','Pandas','Django', 'Flask']
# for i in lis:
#     print(i)
# 7. Use for loop to iterate from 0 to 100 and print only even numbers

# for num in range(0,101):
#     if num % 2 == 0:
#         print(num)
# num = 0
# while num <= 100:
#     if num % 2 == 0:
#         print(num)
#     num += 1

# 8. Use for loop to iterate from 0 to 100 and print only odd numbers

# for num in range(0,101):
#  if num % 2 == 1:
#      print(num)

# num = 0
# while num <= 100:
#     if num % 2 == 1:
#         print(num)
#     num += 1

# ### Exercises: Level 2
    
# 1.  Use for loop to iterate from 0 to 100 and print the sum of all numbers.

# num = range(101)
# number = 0
# for i in num:
#     number  += i
# print(number)

# 1. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

# event = 0
# odds = 0

# for i in range(101):
#     if i % 2 == 0:
#         event += i
#     else:
#         odds += i

# print(f'The sum of all evens is {event}.')
# print(f'And the sum of all odds is {odds}.')


# ### Exercises: Level 3

# 1. Go to the data folder and use the [countries.py](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/data/countries.py) file. Loop through the countries and extract all the countries containing the word _land_.

countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Central African Republic','Chad','Chile','China','Colombi','Comoros','Congo (Brazzaville)','Congo','Costa Rica',"Cote d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor Timur)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Gambia, The','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea, North','Korea, South','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe',]

for i in countries:
    if 'land' in i:
        print(i)

# 1. This is a fruit list, ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop.

# fruit = ['banana', 'orange', 'mango', 'lemon']
# fruits = []
# for i in fruit:
#     fruits.append(i)
# print(fruits)
    

# 2. Go to the data folder and use the [countries_data.py](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/data/countries-data.py) file. 
#    1. What are the total number of languages in the data
#    2. Find the ten most spoken languages from the data
#    3. Find the 10 most populated countries in the world

