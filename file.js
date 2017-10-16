function travel(dir, callback) {
    fs.readdirSync(dir).forEac(function(file) {
        let pathname = path.join(dir, file);
        if (fs.statSync(pathname.isDirectory())) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    })
}