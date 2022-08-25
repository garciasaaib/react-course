export default (function TaskRepository() {
    var db = {}
    var called = 0

    var get = function (id) {
        called++
        console.log(`Getting Task ${id} called ${called} times`)
        return { name: 'New task from db'}
    }

    var save = function (task) {
        called++
        console.log(`Saving ${task} to the db, called ${called} times`)
    }

    return {
        get, save
    }
})()
