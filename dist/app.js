import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const imageBtn = document.querySelector("#new-image");
        imageBtn.onclick = () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                this.page.addChild(new ImageComponent(mediaSection.title, mediaSection.url));
                dialog.removeFrom(dialogRoot);
            });
        };
        const videoBtn = document.querySelector("#new-video");
        videoBtn.onclick = () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                this.page.addChild(new VideoComponent(mediaSection.title, mediaSection.url));
                dialog.removeFrom(dialogRoot);
            });
        };
        const noteBtn = document.querySelector("#new-note");
        noteBtn.onclick = () => {
            const dialog = new InputDialog();
            const textSection = new TextSectionInput();
            dialog.addChild(textSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                this.page.addChild(new NoteComponent(textSection.title, textSection.body));
                dialog.removeFrom(dialogRoot);
            });
        };
        const todoBtn = document.querySelector("#new-todo");
        todoBtn.onclick = () => {
            const dialog = new InputDialog();
            const textSection = new TextSectionInput();
            dialog.addChild(textSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                this.page.addChild(new TodoComponent(textSection.title, textSection.body));
                dialog.removeFrom(dialogRoot);
            });
        };
    }
}
new App(document.querySelector(".document"), document.body);
//# sourceMappingURL=app.js.map