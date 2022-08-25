export default (function TaskRepository() {
    var db = {}

    var get = function (id) {
        console.log('Getting Task ' + id)
        return { name: 'New task from db'}
    }

    var save = function (task) {
        console.log(`Saving ${task} to the db`)
    }

    return {
        get, save
    }
})()
