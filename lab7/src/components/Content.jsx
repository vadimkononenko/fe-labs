import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.changeColor = this.changeColor.bind(this);
    }

    getRandomColor() {
        return Math.floor(Math.random() * 255);
    }

    changeColor(event) {
        event.target.style.background = "rgb(" + this.getRandomColor() + ", " + this.getRandomColor() + ", " + this.getRandomColor() + ")";
        event.target.style.color = "rgb(" + this.getRandomColor() + ", " + this.getRandomColor() + ", " + this.getRandomColor() + ")";
    }

    render() {
        return (
            <div>
                Хоббі:
                <ul>
                    <li>Програмування</li>
                    <li>Спорт</li>
                    <li>Подорожі</li>
                    <li onClick={this.changeColor}>Зустрічі з друзями</li>
                </ul>

                Улюблені фільми:
                <ul>
                    <li onClick={this.changeColor}>"1+1", 2011р</li>
                    <li>"Однокласники", 2010р</li>
                    <li>"Клік: З пультом по життю", 2006р</li>
                </ul>

                <p>
                    <strong>Ло́ндон (англ. London)</strong> - столиця Англії та Великої Британії, розташована на річці Темза.
                    Одне з найбільших міст Європи. Площа 1572 км².
                </p>
                <p>
                    Місто є найбільшим чи одним із двох найбільших (нарівні з Нью-Йорком) фінансових центрів
                    та бізнес-хабів у світі.
                    Також, за версією консалтингової компанії A.T.Kearney, Лондон є найвпливовішим містом у світі.
                </p>
                <p>
                    Лондон XIX сторіччя — місто контрастів. З одного боку, він був столицею найбільшої держави у світі — Британській імперії,
                    економічним та політичним центром світу, а з іншої — містом, де в халупах, практично без засобів для існування, жили мільйони бідняків.
                </p>
                <p>
                    Акцент: Для Лондона традиційно характерний особливий акцент англійської мови, який дістав назву кокні.
                    Найвиразніші його риси — опускання звуку [h] (ейч-дропінг) та вимова [ai] замість [ei].
                    У сучасну епоху жителі Лондона розмовляють із різними акцентами — кокні, надбана вимова (received pronunciation), карибська вимова (для вихідців із Вест-Індії).
                </p>
                <a href="https://london.ca/" target="_blank" rel="noreferrer">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbA_OwQ7iTEg8eBgSgqJMp3UgFd_P63-fXMA&usqp=CAU"
                        alt="london img"
                        height="400px"
                        width="600px"/>
                </a>
                <hr/>
            </div>
        )
    }
}