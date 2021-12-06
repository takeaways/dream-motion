import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.onclick = () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();
      dialog.addChild(mediaSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      //"https://picsum.photos/600/300"
      dialog.setOnSubmitListener(() => {
        this.page.addChild(
          new ImageComponent(mediaSection.title, mediaSection.url)
        );
        dialog.removeFrom(dialogRoot);
      });
    };

    const videoBtn = document.querySelector("#new-video")! as HTMLButtonElement;
    videoBtn.onclick = () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();
      dialog.addChild(mediaSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      //"https://www.youtube.com/embed/JS-Si5GO3iA"
      dialog.setOnSubmitListener(() => {
        this.page.addChild(
          new VideoComponent(mediaSection.title, mediaSection.url)
        );
        dialog.removeFrom(dialogRoot);
      });
    };

    const noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;
    noteBtn.onclick = () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();
      dialog.addChild(textSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        this.page.addChild(
          new NoteComponent(textSection.title, textSection.body)
        );
        dialog.removeFrom(dialogRoot);
      });
    };

    const todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;
    todoBtn.onclick = () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();
      dialog.addChild(textSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        this.page.addChild(
          new TodoComponent(textSection.title, textSection.body)
        );
        dialog.removeFrom(dialogRoot);
      });
    };
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
