// 2) რა არის props children, რისთვის, როდის და როგორ ვიყენებთ მას? მოიყვანეთ მაგალითები(შექმენით რაიმე კომპონენტი თქვენი გემოვნებით)

// props children არის კომპონენტის შიგთავსი რომელიც მოთავსებულია გამხსნელსა და დამხურავს შორის.

// კომპონენტი:
import Card from './Card.jsx'

function App() {
    return (
        <Card>
            <ul>
                <li>element1</li>
                <li>element2</li>
                <li>element3</li>
                <li>element4</li>
                <li>element5</li>
                <li>element6</li>
                <li>element7</li>
                <li>element8</li>
                <li>element9</li>
                <li>element10</li>
            </ul>
        </Card>
    )
}

export default App
