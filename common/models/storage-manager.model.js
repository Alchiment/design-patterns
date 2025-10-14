
class StorageManager {
    constructor() {
        this.storage = {};
    }

    write(key = null, value = null) {
        if (!key) return;
        this.storage[key] = value;
    }

    read(key = null) {
        if (!key) return null;
        return this.storage ? this.storage[key] : null;
    }

    print() {
        console.log('========= Print Storage Manager Values =========')
        console.log(this.storage)
    }
}


module.exports = StorageManager;