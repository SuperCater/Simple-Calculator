const debug = (...args) => {
    console.table(args);
    if (args.includes("version")) {
        console.log(`Version is ${version}`);
    }
};

module.exports = { debug };