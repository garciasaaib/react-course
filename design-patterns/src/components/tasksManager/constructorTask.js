export class Task {

  constructor(data) {
    this.name = data.name;
    this.completed = data.completed || false;
  }

  complete() {
    console.log(`Completing task ${this.name}`);
    this.completed = true;
    // this.save()
  }

  save() {
    console.log(`Saving task ${this.name}`);
    this.taskRepository.save(this.name)
  }
}
export default Task