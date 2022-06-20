a = [-1, 0, 1, 2, -1, -4]
a = sorted(a)
start = 0
end = len(a)-1
ans = []
f = 0
while(start < end):
    t = 0-(a[start] + a[end])
    try:
        i = a.index(t)
    except:
        if(f == 0):
            end -= 1
            f = 1
        else:
            start += 1
            f = 0
        continue
    if(i != start and i != end):
        # ans.append(start)
        # ans.append(end)
        # ans.append(i)
        ans = ans+[[a[start], a[end], a[i]]]
        f = 0
    if(f == 0):
        end -= 1
        f = 1
    else:
        start += 1
        f = 0
# print(ans)
# ans=array(ans)
for i in range(len(ans)):
    ans[i] = sorted(ans[i])
print(ans)
ans2 = []
for i in range(len(ans)):
    try:
        t = ans.index(ans[i], i+1)
        if(t != i):
            ans.pop(t)
            continue
    except:
        continue
# ans.pop(2)
print(ans)
