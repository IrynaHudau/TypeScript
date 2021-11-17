class Todo{
    id:string;
    text:string;

    constructor(info:string){
        this.id = new Date().toISOString();
        this.text = info;
    }
}

export default Todo;