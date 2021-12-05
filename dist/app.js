import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
        const video = new VideoComponent("Video", "https://www.youtube.com/embed/JS-Si5GO3iA");
        video.attachTo(appRoot, "beforeend");
        const note = new NoteComponent("Note Title", "Note Body");
        note.attachTo(appRoot, "beforeend");
        const todo = new TodoComponent("Todo Title", "??");
        todo.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
//# sourceMappingURL=app.js.map