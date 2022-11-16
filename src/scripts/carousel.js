import {Carousel, Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

let gallery = [
    {
        src: "img/works/work-1.png",
        thumb: "img/works/work-1.png",
        caption: "work-1",
    },
    {
        src: "img/works/work-2.png",
        thumb: "img/works/work-2.png",
        caption: "work-2",
    },
    {
        src: "img/works/work-3.png",
        thumb: "img/works/work-3.png",
        caption: "work-3",
    },
    {
        src: "img/works/work-4.png",
        thumb: "img/works/work-4.png",
        caption: "work-4",
    },
];

Fancybox.show(gallery, {
    // Your options go here
});

const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    // Your options
});