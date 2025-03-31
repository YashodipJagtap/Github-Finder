

function About() {
    return (
        <div>
            <h1 className="text-6xl mb-4">
                Github Finder
            </h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. <br></br>This
                project is done by
                <strong><a href='https://www.linkedin.com/in/yashodipjagtap/'>
                    {' '}
                    <span className="underline">Yashodip Jagtap</span>
                </a>{' '}
                </strong>
                on 2025
                .
            </p>
            <p className='text-lg text-gray-400'>
                Source code: <span className='text-white underline'><a href="https://www.linkedin.com/in/dehui-yu-3a7062227/">Check here!</a></span>
            </p>
            <p className='text-lg text-gray-400'>
                This project goes over all of the fundamentals of React including:<br></br>
                <ol>
                    <li>- useContext</li>
                    <li>- useReducer</li>
                    <li>- useState</li>
                </ol>
            </p>
        </div>
    )
}

export default About