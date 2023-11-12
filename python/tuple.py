#Exercises: Level 1

# 1. Create an empty tuple
tpl = ()

# 2. Create a tuple containing names of your sisters and your brothers (imaginary siblings are fine)

sister = ('Zere')
brother = ('Kuanysh','Aisoltan')
print(sister)
print(brother)

# 3. Join brothers and sisters tuples and assign it to siblings

sister = ('Zere',)
brother = ('Kuanysh','Aisoltan')
brother = brother + sister
print(brother)

# 4. How many siblings do you have?

sister = ('Zere',)
brother = ('Kuanysh','Aisoltan')
print(len(sister))
print(len(brother))

# 5. Modify the siblings tuple and add the name of your father and mother and assign it to family_members

sister = ('Zere',)
brother = ('Kuanysh','Aisoltan')
ata_ana = ('Aidyn','Gulnara',)
family_members = ata_ana + sister + brother
print(family_members)

# ### Exercises: Level 2

# 1. Unpack siblings and parents from family_members

family_members = ('Aidyn', 'Gulnara', 'Zere', 'Kuanysh', 'Aisoltan','john','dulat','aidar')
father, mother, brother_1, brother_2, sister_1, * family = family_members 
print(father)
print(mother)
print(brother_1)
print(brother_2)
print(sister_1)
print(family)

# 1. Create fruits, vegetables and animal products tuples. Join the three tuples and assign it to a variable called food_stuff_tp.

fruits = ('banana','apple','peach','lemon','mango',)
vegetables = ('tomato','cucumber','broccoli','potato','radish',)
animal_products = ('Honey','Eggs','Meat','Milk','Caviar',)
food_stuff_tp = fruits + vegetables + animal_products
print(food_stuff_tp)

# 1. Change the about food_stuff_tp  tuple to a food_stuff_lt list
food_stuff_tp = ('banana', 'apple', 'peach', 'lemon', 'mango', 'tomato', 'cucumber', 'broccoli', 'potato', 'radish', 'Honey', 'Eggs', 'Meat', 'Milk', 'Caviar')
lis = list(food_stuff_tp)
print(lis)
# 1. Slice out the middle item or items from the food_stuff_tp tuple or food_stuff_lt list.

food_stuff_tp = ('banana', 'apple', 'peach', 'lemon', 'mango', 'tomato', 'cucumber', 'broccoli', 'potato', 'radish', 'Honey', 'Eggs', 'Meat', 'Milk', 'Caviar')
food_lis = list(food_stuff_tp)
food_lis.pop(len(food_stuff_tp) // 2)
food_tpl = tuple(food_lis)
print(food_tpl)
print(len(food_stuff_tp) // 2)

# 1. Slice out the first three items and the last three items from food_staff_lt list

food_stuff_tp = ('banana', 'apple', 'peach', 'lemon', 'mango', 'tomato', 'cucumber', 'broccoli', 'potato', 'radish', 'Honey', 'Eggs', 'Meat', 'Milk', 'Caviar')
print(food_stuff_tp[0:3])
print(food_stuff_tp[-4:-1])


# 1. Delete the food_staff_tp tuple completely

food_stuff_tp = ('banana', 'apple', 'peach', 'lemon', 'mango', 'tomato', 'cucumber', 'broccoli', 'potato', 'radish', 'Honey', 'Eggs', 'Meat', 'Milk', 'Caviar')
del food_stuff_tp

# 1. Check if an item exists in  tuple:
# - Check if 'Estonia' is a nordic country
# - Check if 'Iceland' is a nordic country

nordic_countries = ('Denmark', 'Finland','Iceland', 'Norway', 'Sweden')
print('Estonia' in nordic_countries)
print('Iceland' in nordic_countries)
