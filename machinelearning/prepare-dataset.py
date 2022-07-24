import zipfile
import shutil
import os
import csv
import pandas as pd


current_working_dir = os.getcwd()


def get_all_file_paths(directory):
    file_paths = []
    for root, directories, files in os.walk(directory):
        for filename in files:
            # join the two strings in order to form the full filepath.
            filepath = os.path.join(root, filename)
            file_paths.append(filepath)

    return file_paths


def un_zip(path_to_zip_file, directory_to_extract_to):
    """ Function to unzip a zipped file
    """
    # shutil.unpack_archive(path_to_zip_file, directory_to_extract_to)
    with zipfile.ZipFile(path_to_zip_file, 'r') as zip_ref:
        zip_ref.extractall(directory_to_extract_to)

    print('All files unzipped successfully!')


def zip(path_to_zip_file, directory_to_zip):
    # Method 2
    # with zipfile.ZipFile(path_to_zip_file,'w') as zip:
    #     file_paths=get_all_file_paths(directory_to_zip)
    #     # writing each file one by one
    #     for file in file_paths:
    #         zip.write(file)
    shutil.make_archive(path_to_zip_file, format='zip',
                        root_dir=directory_to_zip)

    print('All files zipped successfully!')


def copy_image(row, src_dir, dst_parent_dir):
    image_dst = ""
    image_name = row["image_name"]+".jpg"
    image_src = os.path.join(src_dir, image_name)
    if(row["benign_malignant"] == "malignant"):
        image_dst = os.path.join(dst_parent_dir, "malignant/")
    elif(row["benign_malignant"] == "benign"):
        image_dst = os.path.join(dst_parent_dir, "benign/")

    shutil.copy2(image_src, image_dst)


def copy_images(meta_filename):
    train_df = pd.read_csv(meta_filename)
    src = os.path.join(current_working_dir, "jpeg/train")
    dst = os.path.join(current_working_dir, "data/train")
    train_df.apply(lambda row: copy_image(row, src, dst), axis=1)
    print("Images copied successfully")


def main():
    # un_zip("jpeg.zip", "jpeg")
    paths = ["data/train/malignant", "data/train/benign",
             "data/test/malignant", "data/test/benign"]
    try:
        #     for dir_path in paths:
        #         os.makedirs(os.path.join(current_working_dir, dir_path))
        #     print("Directories created successfully")
        #     copy_images("sample_1.csv")
        zip("data", "data")
    except OSError as error:
        print(error)


if __name__ == '__main__':
    main()
