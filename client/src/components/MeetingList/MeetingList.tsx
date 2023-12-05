import * as ScrollArea from '@radix-ui/react-scroll-area';
import './styles.css';
import { Meeting } from '../../types/meeting';
import { CalendarIcon } from '@radix-ui/react-icons';


interface MeetingListProps {
    meetings: Meeting[];
    onSelectMeeting: (meeting: Meeting) => void;
}

const MeetingList = ({ meetings, onSelectMeeting }: MeetingListProps) => {

  return (
  <ScrollArea.Root className="ScrollAreaRoot">
    <ScrollArea.Viewport className="ScrollAreaViewport">
      {meetings.map((meeting, index) => (
        <div
          key={index}
          className="meetingItem"
          onClick={() => {
            onSelectMeeting(meeting);
          }}
        >
          <CalendarIcon height={12} width={20} style={{ marginRight: 5 }} />
          <div>{meeting.title}</div>
        </div>
      ))}
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
      <ScrollArea.Thumb className="ScrollAreaThumb" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
      <ScrollArea.Thumb className="ScrollAreaThumb" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className="ScrollAreaCorner" />
  </ScrollArea.Root>
  );
};

export default MeetingList;