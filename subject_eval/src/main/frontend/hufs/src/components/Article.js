import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ArticlePage = () => {
  const [article, setArticle] = useState({
    title: '제목',
    content: '내용',
  });

  // 삭제 모달 상태 관리
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // 수정 모달 상태 관리
  const [showEditModal, setShowEditModal] = useState(false);

  // 수정 시 비밀번호 입력을 위한 상태
  const [password, setPassword] = useState('');

  // 게시글 삭제
  const handleDelete = () => {
    setShowDeleteModal(false);
  };

  // 게시글 수정
  const handleEdit = () => {
    setShowEditModal(false);
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>

      {/* 삭제 버튼 */}
      <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
        삭제
      </Button>

      {/* 수정 버튼 */}
      <Button variant="primary" onClick={() => setShowEditModal(true)}>
        수정
      </Button>

      {/* 글 삭제 모달 */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          글을 삭제하시겠습니까?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            취소
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            삭제
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 글 수정 모달 */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* 비밀번호 입력 폼 */}
          <Form.Group controlId="password">
            <Form.Label>비밀번호 입력</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          글을 수정하시겠습니까?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            취소
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            수정
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ArticlePage;
