import { useState } from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

/**
 * StarRating
 * - Manages its own rating state internally with useState
 * - Displays 5 stars; clicking the left/right half of a star sets a
 *   half-star or full-star rating (e.g. 3, 3.5, 4)
 * - Filled stars = gold, half-filled = silver, empty = outline
 */
const StarRating = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating)

  return (
    <div className="star-rating" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        const isFilled = rating >= starValue
        const isHalfFilled = !isFilled && rating >= starValue - 0.5

        return (
          <span
            className={`star-button${isFilled ? ' is-filled' : ''}${isHalfFilled ? ' is-half-filled' : ''}`}
            key={starValue}
          >
            {isFilled ? (
              <FaStar aria-hidden="true" />
            ) : isHalfFilled ? (
              <FaStarHalfAlt aria-hidden="true" />
            ) : (
              <FaRegStar aria-hidden="true" />
            )}
            <button
              className="star-half-button star-half-button-left"
              type="button"
              aria-label={`Rate ${starValue - 0.5} out of 5 stars`}
              aria-pressed={rating === starValue - 0.5}
              onClick={() => setRating(starValue - 0.5)}
            />
            <button
              className="star-half-button star-half-button-right"
              type="button"
              aria-label={`Rate ${starValue} out of 5 stars`}
              aria-pressed={rating === starValue}
              onClick={() => setRating(starValue)}
            />
          </span>
        )
      })}
      <span className="rating-value">{rating}/5</span>
    </div>
  )
}

export default StarRating
