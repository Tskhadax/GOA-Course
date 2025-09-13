/* 3) შექმენით <DogComponent /> კომპონენტი, რომელსაც ექნება სურათი, სათაური აღწერა და ღილაკი.
გასტილეთ ეს კომპონენტი
სურათი გადმოიწერეთ და შეინახეთ პროექტის ფოლდერში.
დააიმპორტეთ სურათი კომპონენტში და დაარენდერეთ

4) შექმენით ზუსტად იგივე კომპონენტი როგორც <DogComponent />, ოღონდ <CatComponent />

5) შექმენით ზუსტად იგივე კომპონენტი როგორც <DogComponent />, ოღონდ <DragonComponent />

6) შექმენით რაიმე <AnimalsList /> კომპონენტი(ცოტა მაინც გააფორმეთ), რომელიც იქნება ერთგვარი ჩამონათვალი ცხოველებისა. <AnimalsInfo /> ში დააიმპორტეთ წინა დავალებაში შექმნილი ცხოველები და დაარენდერეთ ისინი. 
*/


import CatComponent from './CatComponent.jsx'
import DogComponent from './DogComponent.jsx'
import DragonComponent from './DragonComponent.jsx'

function AnimalList() {
  return (
    <>
      <DogComponent name="Dog" />
      <CatComponent name="Cat" />
      <DragonComponent name="Dragon" />
    </>
  )
}

export default AnimalList