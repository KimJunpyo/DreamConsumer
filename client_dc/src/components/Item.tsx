import { ProgressBar } from '.';

// 마이페이지 - 성공한 제품 리스트 { 제목, 성공날짜, 상품 금액 }
// 휴지통 - 삭제된 제품 리스트 { 제목, 삭제날짜, 진행률(혹은 상품금액과 입금금액) }

// TODO: 클릭시 상세페이지로 이동
// TODO: 휴지통에서 편집 클릭시 왼쪽에 체크박스 표시되어야 함

export default function Item() {
  return (
    <div className='flex items-center border-b border-grey-border px-2 pt-5 pb-3'>
      {/* TODO: EDIT 모드 실행시 체크박스 노출 부분 */}
      {/* <input type='checkbox' className='mr-3' /> */}
      <div className='min-w-0'>
        <div className='flex justify-between items-center pb-2 px-1 gap-2'>
          <h2 className='font-nb text-grey-text whitespace-nowrap text-ellipsis overflow-hidden'>
            넥스트를 정복하기위한 파란만장 프로젝트
          </h2>
          <span className='font-nr text-xs text-grey-border w-fit whitespace-nowrap text-end'>
            삭제날짜 2023.08.30
          </span>
        </div>
        <ProgressBar progress={100} displayText price={100000} />
      </div>
    </div>
  );
}
