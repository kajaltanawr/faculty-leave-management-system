import cv2
video_cap = cv2.VideoCapture(0)
while True:
    ret,video_data=video_cap.read()
    if cv2.waitKey(10)==ord("a"):
        break
video_cap.release()