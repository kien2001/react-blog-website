function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
const handleActiveScroll = () => {
    const markedTitles = document.getElementsByClassName("marked__titles");
    const positionTopArr = Array.from(markedTitles).map((el) => {
        return getOffset(el).top - 200
    })
    let offsetY = window.scrollY;
    let activeCurrent= document.querySelectorAll(".active")[0]
    switch(true){
        case 0<= offsetY && offsetY < positionTopArr[1]:{
            activeCurrent.classList.remove("active");
            document.querySelector(".nav a[href= '#']").classList.add("active");
            break;
        }
        case positionTopArr[1]<= offsetY && offsetY < positionTopArr[2]:{
            activeCurrent.classList.remove("active");
            document.querySelector(".nav a[href= '#about']").classList.add("active");
            break;
        }
        case positionTopArr[2]<= offsetY && offsetY < positionTopArr[3]:{
            activeCurrent.classList.remove("active");
            document.querySelector(".nav a[href= '#experience']").classList.add("active");
            break;
        }
        case positionTopArr[3]<= offsetY && offsetY < positionTopArr[4]:{
            activeCurrent.classList.remove("active");
            document.querySelector(".nav a[href= '#services']").classList.add("active");
            break;
        }
        case positionTopArr[4]<= offsetY && offsetY < positionTopArr[5]:{
            activeCurrent.classList.remove("active");
            document.querySelector(".nav a[href= '#portfolio']").classList.add("active");
            break;
        }
        case positionTopArr[5]<= offsetY && offsetY < positionTopArr[6]:{
            activeCurrent.classList.remove("active");
            document.querySelector(".nav a[href= '#testimonials']").classList.add("active");
            break;
        }
        case offsetY >= positionTopArr[6]:{
            activeCurrent.classList.remove("active");
            document.querySelector(".nav a[href= '#contact']").classList.add("active");
            break;
        }
        default:{
            return new Error("Invalid position")
        }
    }
}
export default handleActiveScroll