import { useState } from "react"

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {

    const [isFollowing, setIsfollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
      setIsfollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
             className="tw-followCard-avatar"
             alt="El avatar de Hector" 
             src={`https://unavatar.io/${userName}`}/>
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>
        
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span> 
                <span className='tw-followCard-stopfollow'>Dejar de seguir</span>
            </button>
        </aside>
        </article>
    )
}

