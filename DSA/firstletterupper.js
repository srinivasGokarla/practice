let check = "axelor india"
let ans = check.split(" ")
for (let i = 0; i < ans.length; i++) {
    ans[i] = ans[i][0].toUpperCase() + ans[i].substr(1);
}
console.log(ans)
