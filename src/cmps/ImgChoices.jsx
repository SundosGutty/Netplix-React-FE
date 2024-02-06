import { infoService } from "../services/infoSevice"

export const ImgChoises = ({ setUserImg }) => {
    const imgs = infoService.getUserImg()
    return (
        <section className="img-choice-modal flex align-center justify-center gap20 column">
            <h1 >Choose your NetPlix Character!</h1>
            <section className="flex align-center justify-center gap10">
                {imgs.map((img) => (<img onClick={() => setUserImg(img)} key={img.id} src={img.url} loading="lazy"/>))}
            </section>
        </section>
    )
}