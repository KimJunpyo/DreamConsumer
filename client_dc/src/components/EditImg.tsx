interface EditImgProps {
  editMode?: boolean;
}

export default function EditImg({ editMode }: EditImgProps) {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 15.75V14.1562L12.975 10.1812L14.5687 11.775L10.5938 15.75H9ZM2.25 12V10.5H7.5V12H2.25ZM15.0938 11.25L13.5 9.65625L14.0438 9.1125C14.1813 8.975 14.3562 8.90625 14.5687 8.90625C14.7812 8.90625 14.9563 8.975 15.0938 9.1125L15.6375 9.65625C15.775 9.79375 15.8438 9.96875 15.8438 10.1812C15.8438 10.3937 15.775 10.5687 15.6375 10.7062L15.0938 11.25ZM2.25 9V7.5H10.5V9H2.25ZM2.25 6V4.5H10.5V6H2.25Z'
        fill={editMode ? 'white' : '#85B6FF'}
      />
    </svg>
  );
}
