def calculate_average(num):
    sum_num = sum(num)
    average = sum_num / len(num)
    return average

print(calculate_average([1, 2, 3, 4, 5]))

def strings(num):
    
    if num % 2 == 0:
        print("Even ")
    else:
        print("Odd")
strings(6)

def sums(x):
    res = 1
    for i in x:
        res *= i
    return res
result = sums([2,3,4])
print(result)

def texts(strings, text):
    return text in strings
result = texts('Hello, how are you?','you')
print(result)

def concatenate_lists(x,y):
    return x + y
result = concatenate_lists([1,2],[3,4])
print(result)

def count_char_occurrences(x,y):
    return x.count(y)
result = count_char_occurrences('hello','h')
print(result)

def filter_short_words(x,y):
    return [i for i in x if len(i) == y]
result=filter_short_words(["apple", "banana", "kiwi", "pear", "grape"], 4)
print(result)

