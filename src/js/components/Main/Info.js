import transformersSpoiler from '../../../assets/spoilers/transformers.jpg';
import transformersSpoilerSmall from '../../../assets/spoilers/transformers_360.jpg';
import transformersSpoilerMedium from '../../../assets/spoilers/transformers_720.jpg';
import transformersSpoilerLarge from '../../../assets/spoilers/transformers_1080.jpg';

const dateFormater = (dateString) => {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    return date.toLocaleString(undefined, options);
};

export const Info = ({
    movieImages = {
        base: transformersSpoiler,
        small: transformersSpoilerSmall,
        medium: transformersSpoilerMedium,
        large: transformersSpoilerLarge,
    },
    movieInfo: {
        releaseDate = '2017-07-22T00:00:00.000Z',
        movieTitle = 'Transformers: The Last Knight',
        director = 'Michael Bay',
        startDate = '2017-07-22T00:00:00.000Z',
        imdb = 7.4,
        rottenTometoes = 6.7,
    } = {},
} = {}) => {
    const info = document.createElement('article');
    info.classList.add('info');

    const formatedReleaseDate = dateFormater(releaseDate);
    const formatedStartDate = dateFormater(startDate);

    info.innerHTML = `
        <h2 class="movieTitle">${movieTitle}</h2>
        <div class="infoWrapper">
          <div class="movieImageWrapper">
            <img
              src=${movieImages.base}
              srcset="
                ${movieImages.small}   360w,
                ${movieImages.medium}   720w,
                ${movieImages.large} 1080w
              "
              sizes="(max-width: 360px) 25vw, (max-width: 767px) 25vw, (min-width: 768px) 50vw"
              alt="${movieTitle} spoiler"
              class="movieImage"
            />
          </div>
          <section class="description">
            <dl class="descriptionList">
              <dt>Release date</dt>
              <dd><time datetime="${formatedReleaseDate}">${formatedReleaseDate}</time></dd>
              <dt>Title</dt>
              <dd>${movieTitle}</dd>
              <dt>Director</dt>
              <dd>${director}</dd>
              <dt>Start date</dt>
              <dd><time datetime="${formatedStartDate}">${formatedStartDate}</time></dd>
              <dt>IMDB</dt>
              <dd>${imdb}</dd>
              <dt>Rotten Tomatoes</dt>
              <dd>${rottenTometoes}</dd>
            </dl>
          </section>
        </div>`;
    return info;
};
