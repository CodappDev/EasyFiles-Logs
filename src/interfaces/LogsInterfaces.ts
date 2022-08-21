export interface LogCreateData {
  createdAt: Date;
  organizationId: string;
  type: string;
  userId?: string;
  teamId?: string;
  groupId?: string;
  repositoryId?: string;
  fileId?: string;
  text: string;
}

export interface LogDeleteData {
    ids: string[];
}
