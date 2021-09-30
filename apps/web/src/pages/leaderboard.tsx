import styled from 'styled-components';
import { Avatar, Button, Col, Divider, Input, message, Row, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { IJwtPayload } from '@hacksquad/shared';
import { NavigationBar } from '../components/shared/NavBar';
import { Footer } from '../components/landing';
import { api } from '../shared/api';
import { isServerSide } from '../shared/utils';
import { getUser } from '../shared/auth.service';
import { Leaderboard } from '../components/Leaderboard';
import { trackAnalyticsEvent } from '../shared/analytics.service';

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [userTeam, setUserTeam] = useState<any>(null);
  const [user, setUser] = useState<IJwtPayload>();

  useEffect(() => {
    if (!isServerSide()) {
      const userData = getUser();
      setUser(userData);
    }

    loadLeaderboard();
  }, []);

  async function loadLeaderboard() {
    const response = await api.get('/v1/leaderboard');

    setUserTeam(response.userTeam);
    setLeaderboard(response.leaderboard);
  }

  const INVITE_LINK = `https://hacksquad.dev/compete-invite?token=${user?.organizationId}`;

  return (
    <>
      <NavigationBar />
      <Row justify="center">
        <Col span={10}>
          <h1 className="hero-heading-white">
            The
            <br />
            <span style={{ color: '#5ec6e8' }}> Leaderboard.</span>
          </h1>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={10}>
          <Leaderboard items={leaderboard} />
        </Col>
      </Row>
      {userTeam?.position > 10 && (
        <Row justify="center">
          <Col span={10}>
            <Leaderboard items={[userTeam]} />
          </Col>
        </Row>
      )}

      <Divider />
      {user?.organizationId && (
        <Row justify="center" style={{ marginBottom: 30 }}>
          <Col span={10}>
            <h1 style={{ fontSize: 24, marginBottom: 10, lineHeight: '24px' }} className="hero-heading-white">
              Invite your Co-workers to compete
            </h1>

            <p>Got your squad ready? Invite some other squads to play against. And let the best squad win :)</p>

            <Input
              style={{ backgroundColor: '#999', border: 'none', maxWidth: 500 }}
              size="large"
              readOnly
              value={`https://hacksquad.dev/compete-invite?token=${user?.organizationId}`}
              addonAfter={(
                <>
                  <Button
                    type="link"
                    onClick={() => {
                      navigator.clipboard.writeText(INVITE_LINK);
                      message.success('Invite link copied successfully');
                      trackAnalyticsEvent('leaderboards:copy-link');
                    }}>
                    Copy Link
                  </Button>
                </>
              )}
            />
          </Col>
        </Row>
      )}

      <Footer />
    </>
  );
}
