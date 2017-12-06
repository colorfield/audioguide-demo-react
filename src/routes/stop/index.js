import React from 'react';
import Layout from '../../components/Layout';
import StopPage from './StopPage';
import { JSON_API_URL } from '../../constants/env';

async function action({ locale, params }) {
  const drupalLocale = locale.substring(0, 2); // @todo improve

  // Fetch the localized node.
  // - mp3 file attached to the node : include=field_mp3
  // - Paragraphs that alos contains mp3 files : include=field_mp3,field_audio_answer.field_mp3
  const endpoint = `${JSON_API_URL}/${drupalLocale}/jsonapi/node/audio/${params.stop_id}?include=field_image,field_mp3,field_audio_answer,field_audio_answer.field_mp3`;
  const node = await fetch(endpoint).then(response => response.json());
  if (!node) throw new Error('Failed to load the stop.');
  // Set page name from the current stop.
  const title = `Stop - ${node.data.attributes.title}`;

  // @todo get previous and next audio files (if any)

  return {
    chunks: ['stop'],
    title,
    component: (
      <Layout>
        <StopPage title={title} stop={node} itineraryId={params.itinerary_id} />
      </Layout>
    ),
  };
}

export default action;
