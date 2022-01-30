import blob from "../assets/blob.png";
import cat from "../assets/cat.png";
import apple from "../assets/apple.png";

const petImg = [{
        'pet': "blob",
        'image': blob
    },
    {
        'pet': "cat",
        'image': cat,
    },
    {
        'pet': "apple",
        'image': apple
    }]

function petPreview(type) {
    if (type === 1) {
        return petImg[0].image;
    }
    if (type === 2) {
        return petImg[1].image;
    }
    if (type === 3) {
        return petImg[2].image;
    }
}

export default petPreview;