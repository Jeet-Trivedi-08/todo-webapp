const person = {
    name: "Jeet",
    address: {
        line1: "Shivam, Rajlaxmi Park",
        city: "Rajkot",
        country: "India"
    },
    profiles: ['twitter(X)', 'linkedIn', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile =>  console.log(profile)
        )
    }
}

export default function DemoJavaScript() {
    return(
        <div>
            <div> { person.name } </div>
            <div> { person.address.line1 } </div>
            <div> { person.address.city } </div>
            <div> { person.address.country } </div>
            <div> { person.profiles[0] } </div>
            <div> { person.printProfile() } </div>
        </div>
    )
}