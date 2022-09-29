import React from 'react'

export default function SocialLinks({ social_profile, p_l }) {
    return (
        <div className="social-links" alignContent='right'>
            {social_profile.map((d, k) => (
                <a style={{ marginLeft: p_l }} key={k} href={d.profileLink} target="_blank" rel="noreferrer">{d.icon}</a>
            ))}
        </div>
    )
}
