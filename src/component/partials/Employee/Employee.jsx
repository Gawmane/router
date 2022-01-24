import style from '../Employee/Employee.module.scss'

export const Employee = (props) => {
	return (
     
<span>
        <figure >
            <img src="https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png"/>
            <figcaption>
                <article>
                    <h2>Jonna Brown</h2>
                    <h4>Founder</h4>
                    <p>Harvard University</p>
                </article>
                <button>Contact</button>
            </figcaption>
        </figure>
        <figure >
            <img src="https://cdn.pixabay.com/photo/2016/04/26/07/20/woman-1353803_1280.png" />
            <figcaption>
                <article>
                    <h2>Jenny Smith</h2>
                    <h4>Ceo</h4>
                    <p>Harvard University</p>
                </article>
                <button>Contact</button>
            </figcaption>
        </figure>
        <figure >
            <img src="https://cdn.pixabay.com/photo/2018/03/05/22/15/dog-3202010_1280.jpg" />
            <figcaption>
                <article>
                    <h2>Glibert</h2>
                    <h4>Office Doggo</h4>
                    <p>Harvard kennel</p>
                </article>
                <button>Contact</button>
            </figcaption>
        </figure></span>
    

    )
}