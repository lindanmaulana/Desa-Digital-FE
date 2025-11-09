export const Entity = {
  USER: 'USER',
  SOCIAL_ASSISTANCE: 'SOCIAL_ASSISTANCE',
  DEVELOPMENT: 'DEVELOPMENT',
  EVENT: 'EVENT',
  PROFILE: 'PROFILE',
} as const;

export type EntityImage = typeof Entity[keyof typeof Entity]

export interface Image {
  id: string;
  filename: string;
  path: string;
  user_id: string;
  entity_type: EntityImage;
  created_at: string;
  updated_at: string;
}
