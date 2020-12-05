def differnce(arr):
    max=-1
    min=arr[0]
    diff=-1
    i=1
    while i<len(arr):
        if arr[i] < min:
            min=arr[i]
            max=-1
        elif arr[i] > max:
            max = arr[i]
            diff = max - min
        
        i= i+1
    return diff

x = int(raw_input())
start = 1
while(start <= x):
    size = raw_input()
    li = [int(size) for y in size]
    print(differnce(li))
    start = start + 1



