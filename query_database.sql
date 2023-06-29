-- Viết những câu truy vấn tạo bảng

-- Tạo bảng Task
CREATE TABLE IF NOT EXISTS `Task` (
  idTask INT PRIMARY KEY AUTO_INCREMENT,
  nameTask VARCHAR(255) NOT NULL,
  dateTask DATE NOT NULL,
  descriptionTask TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;
