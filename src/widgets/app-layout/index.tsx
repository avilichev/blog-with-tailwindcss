import React from 'react';
import { Layout } from 'shared/ui';

export const AppLayout: React.FC = (props) => (
  <Layout>
    <Layout.Header></Layout.Header>
    <Layout.Content>{props.children}</Layout.Content>
    <Layout.Footer></Layout.Footer>
  </Layout>
);
