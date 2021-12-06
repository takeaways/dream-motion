import { InputDialog } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.page.addChild(new ImageComponent("Image Title", "https://picsum.photos/600/300"));
        this.page.addChild(new VideoComponent("Video", "https://www.youtube.com/embed/JS-Si5GO3iA"));
        this.page.addChild(new NoteComponent("Note Title", "Note Body"));
        this.page.addChild(new TodoComponent("Todo Title", "??"));
        const imageBtn = document.querySelector("#new-image");
        imageBtn.onclick = () => {
            const dialog = new InputDialog();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        };
    }
}
new App(document.querySelector(".document"));
//# sourceMappingURL=app.js.map