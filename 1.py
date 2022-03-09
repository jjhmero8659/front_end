str = "RVJZJSRJVUFERUVJZXEGIZETZGCVBEFNERJRJLSJKZKLKZFEGVIDLKRKZFEEVKNFIBREUZJVWWZTZVEKZESFKYJFWKNRIVREUYRIUNRIV"
str_array = [];
letter_array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
letter_count_array = []
const_letter_count_array = []
max_value_index = []
max_value_letter = []
str_replace = "1"
key = 0
print(-21%26)
print(len(letter_array))

def init(): ##기본값 세팅
    for i in range(0,len(str)):
        str_array.append(str[i])    ##str 은 변경 불가, array에 따로 저장
    
    for i in letter_array:
        letter_count_array.append(0) ##알파벳 숫자만큼 count 배열 append

def check():
    for i in range(0,len(str)): ##배열 전체 순환 105개 
        for z in range(0,len(letter_array)): ## z 순환 26개
            if(str_array[i] == letter_array[z]): ##문자열이 해당하는 알파벳 count 증가
                letter_count_array[z] += 1 ##증감 연산자
    max_value = max(letter_count_array) ##count 한 숫자 array 중에서 가장 큰 count 숫자
    print(f"max_value : {max_value}")

    const_letter_count_array = list(letter_count_array) ## count 값을 가지는 추가 배열 변동 없음
    print(f"count : {const_letter_count_array}")

    for i in range (0,6):
        max_value = max(letter_count_array) ##변환이 가능한 count array중 제일 큰 count 숫자, 변수에 저장
        
        max_value_index.append(letter_count_array.index(max_value)) ##최대 count 를 가지는 값을 배열에 저장
        print(f"max_value_index {i+1} : {max_value_index[i]}")
        letter_count_array[letter_count_array.index(max_value)] = 0; ##최고 count 배열 count = 0 , 다음 수를 계산 해야하기 때문
        max_value_letter.append(letter_array[max_value_index[i]])
        print(f"{i+1} 번 max count = {max_value_letter[i]}")

def matching(key): ##17번 키
    key = 17
    num = 0
    for i in range(0,len(str_array)):
        for z in range(0,len(letter_array)):
            if(str_array[i] == letter_array[z]):
                num = (z - key) % 26
                str_array[i] = letter_array[num]
                break

        
        

    

init();

print("")
check();
print(str_array)
print("")


matching();
print(("").join(str_array))

print(str_array)


print(max_value_letter)



        
    
    
