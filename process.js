//打印当前进程信息;

process.argv.forEach((v, i) => {
    console.log(`${i}:${v}`);
})