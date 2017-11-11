//打印当前进程信息;

process.argv.forEach((v, i) => {
    console.log(`${i}:${v}`);
})

const cpuUsage = process.cpuUsage();
console.log(cpuUsage.user / cpuUsage.system);