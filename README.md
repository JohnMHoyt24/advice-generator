# Frontend Mentor - Advice Generator with React, Tailwind, TypeScript, and Vite
- A div that displays a random quote when calling an API via a button.
- The API is found here: https://api.adviceslip.com/.
## Initial State
<img width="956" height="445" alt="image" src="https://github.com/user-attachments/assets/d7f7dc65-c6c4-4761-bcbc-c0b8501a4b87" />

## Advice State
<img width="944" height="454" alt="image" src="https://github.com/user-attachments/assets/2526b301-6b0f-4830-86e7-aba6fc074eb0" />

## John Hoyt
- Website - [John's World](https://www.your-site.com](https://accessible-portfolio-six.vercel.app/))
- Frontend Mentor - [@JohnMHoyt24]([https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/JohnMHoyt24))

## Technologies Used
- HTML
- JavaScript
- TypeScript
- CSS
- React
- Vite

## What I Learned
- The use of interfaces in TypeScript when receiving a response in JSON.
  ## advice.tsx lines 5-11
  ```
  const Advice: React.FC = () => {
    interface Advice {
        slip: {
            id: number;
            advice: string;
        }
    }
  ```
- The use of asynchronous functions when when waiting for a response from an API call.
## advice.tsx lines 16-34
```
    async function fetchAdvice(){
        setLoading(true);
        try {
            const response = await fetch('https://api.adviceslip.com/advice');

            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: Advice = await response.json();
            setAdvice(data);
        }

        catch (error) {
            console.error("Error fetching advice: ", error);
        } finally {
            setLoading(false);
        }
    }
```
