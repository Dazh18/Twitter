import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

const users = [
    {
        userName: 'dazh18',
        name: 'Héctor Azócar',
        isFollowing: false
        
    },
    {
        userName: 'alastor666',
        name: 'Jheinser Rojas',
        isFollowing: true
      },
      {
          userName: 'janinalchair',
          name: 'Mia Mariano',
          isFollowing: false
        },
]

export function App () {
    
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                          key={userName}
                          userName={userName}
                          initialIsFollowing = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

{/* {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      } */}
        </section>
    )
}